import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import"./InfoBox.css"
export default function InfoBox({info}){
    
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAINY_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg="
    return(
        <div className="InfoBox">
       
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140}}
        image={info.humidity>80?RAINY_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80?<ThunderstormIcon/> :info.temp>15?<LightModeIcon/>: <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2"  color= 'text.secondary' component={"span"}>
         <p>Temperature= {info.temp}&deg;C</p>
          <p>Humidity= {info.humidity}</p>
           <p>Min Temp= {info.temp_min}&deg;C</p>
           <p>Max Temp= {info.temp_max}&deg;C</p>
           <p>The weather can be described as <i>{info.weather}</i> and can feels like={info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}