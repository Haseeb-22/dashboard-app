// import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid,Tooltip ,Chip} from '@mui/material';

// import { useNavigate } from 'react-router-dom';

function CardRender() {

    let location=useLocation();
    
  return (
    <div>
        <p>Data</p>
      <Container>
            <Grid container sx={{ marginTop: "100px" }} spacing={3}>
                    <Grid item md={3} xs={12} sm={6} >
                        <Card className="bgLight" sx={{ maxWidth: 345 }}>
                            <CardMedia>
                                <img src={location.state.image} width="75%" height="250" alt="" />
                            </CardMedia>
                            <CardContent>
                                <Tooltip title={location.state.title}>
                                    <Typography
                                        sx={{ height: 60, overflow: "hidden", fontSize: "18px" }}
                                        variant="h6"
                                    >
                                        {location.state.title.slice(0, 30) +
                                            (location.state.title.length > 30 ? "..." : "")}
                                    </Typography>
                                </Tooltip>
                                <Chip label={location.state.category} />
                                <Typography sx={{ fontSize: "16px" }}>
                                    Rs {location.state.price}/-
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                
            </Grid>
        </Container>
    </div>
  )
}

export default CardRender