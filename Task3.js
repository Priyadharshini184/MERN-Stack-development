const http = require("http");
 const flights = [
             { flight_id : "6E-211",flight_name:"Indigo",from : "Chennai",to:"Mumbai",price :3700,departure_time : "07:00",arrival_time:"9:25",totalSeats:150,availableSeats:50},
             { flight_id : "AI-506",flight_name:"Air India",from : "Delhi",to:"Bengaluru",price :5000,departure_time : "10:30",arrival_time:"13:20",totalSeats:200,availableSeats:100},
             { flight_id : "SG-928",flight_name:"SpiceJet",from : "Kolkata",to:"Hyderabad",price :4500,departure_time : "14:00",arrival_time:"16:15",totalSeats:180,availableSeats:80},
             { flight_id : "6E-315",flight_name:"Indigo",from : "Bengaluru",to:"Delhi",price :6000,departure_time : "18:45",arrival_time:"21:15",totalSeats:160,availableSeats:60},
             { flight_id : "AI-672",flight_name:"Air India",from : "Mumbai",to:"Jaipur",price :4200,departure_time : "06:25",arrival_time:"08:10",totalSeats:190,availableSeats:90}
        ];
 const bookings = [];
const server = http.createServer((req,res) =>{
    const url = req.url;
    const method = req.method;
    res.setHeader("Content-Type","application/json");
    const getId = () => url.split("/")[2];
    const send = (status,data) => {
        res.statusCode = status;
        res.end(JSON.stringify(data));
    };

    if(url === "/flights" && method ==="GET"){
        return send(200,flights);
    }

    else if(url.startsWith("/flights/") && method === "GET"){
        const id = getId();
        const flight = flights.find(f=>f.flight_id===id);
        if(!flight) return send(404,{error : "Flight not found"});
        return send(200,flight);
        
    }

    else if(url ==="/bookings" && method ==="POST"){
        let body = "";
        req.on("data",chunk => body += chunk);
        req.on("end",()=>{
            try{
                const data = JSON.parse(body);
                if(!data.name || !data.flight_id){
                    return send(400,{error:"Missing required fields"});
                }
                const flight = flights.find(f => f.flight_id === data.flight_id);
                if(!flight){
                    return send(404,{error:"Flight not found"});
                }
                if (data.requestedSeats <= 0 ){
                    return send(400,{error:"Enter a valid number of seats"});
                }
                if(data.requestedSeats > flight.availableSeats){
                    return send(400,{error:"Not enough seats available"});
                }
                flight.availableSeats -= data.requestedSeats;
                const newUser ={
                    id : bookings.length? bookings[bookings.length-1].id +1 : 1,
                    flight_id : flight.flight_id,
                    flight_name : flight.flight_name,
                    name : data.name,
                    requestedSeats : data.requestedSeats
                };
                bookings.push(newUser);
                return send(201,newUser);
            }
            catch(err) {
                return send(400,{error : "Invalid JSON"});
            }
        });
        return;
    }
    else if(url === "/bookings" && method === "GET"){
        return send(200,bookings);
    } 
    else{
        return send(404,{error : "Route not found"});
    }
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
