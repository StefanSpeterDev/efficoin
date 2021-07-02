import Container from "@material-ui/core/Container";
import {Line} from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import {useEffect, useState} from "react";


import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {AddShoppingCartOutlined, ArrowDownward} from "@material-ui/icons";
import {createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {green, purple, red} from "@material-ui/core/colors";

const muiTheme = createMuiTheme({
    overrides:{
        MuiSlider: {
            thumb:{
                color: "#F1CB2E",
            },
            track: {
                color: '#F1CB2E'
            },
            rail: {
                color: '#F1CB2E'
            },
            markLabel: {
                color: '#FFFFFF'
            },
            markLabelActive:{
                color: 'green'

            }
        }
    },
    palette: {
        primary: red,
        secondary: green
    },

});

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 25,
        label: '25',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 100,
        label: '100',
    },

];


function valuetext(value) {
    return `${value}°C`;
}


export default function Home({person}) {

    const [price, setPrice] = useState(0);
    const [variation, setVariation] = useState(0);
    const [check, setCheck] = useState(0)
    const [quantity, setQuantity] = useState(0)

    let arrayValue = [];

    let arrayTime = [];

    function calculPrice(price,quantity) {
        return price.toFixed(2) * quantity
    }

    person.data.map( (item) => {
        arrayValue.push( item.value)
        arrayTime.push( item.time)

    })
    const [time, setTime] = useState(arrayTime)

    const [prices, setPrices] = useState(arrayValue)





    console.log(prices)

    const data = {
        labels: time,
        datasets: [
            {
                label: "Cours du Efficoin",
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#F1CB2E',
                borderColor: '#F1CB2E',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#F1CB2E',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#F1CB2E',
                pointHoverBorderColor: 'F1CB2E',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: prices
            }
        ]
    };

    const callApi = async () => {
        const price = fetch('http://localhost:3000/api/lastPrice')
            .then((response) => {
                return response.json();
            }).then((data) => {

                setPrice(data.data.value)
                setVariation(data.data.variation)
                arrayValue.push(data.data.value)
                arrayTime.push(data.data.time)
                setPrices(prevState => [...prevState,data.data.value]);
                setTime(prevState => [...prevState,data.data.time])
                // `data` is the parsed version of the JSON returned from the above endpoint.
                const res = fetch('http://localhost:3000/api/price', {
                    method: 'POST',
                    body: new URLSearchParams({
                        'value': data.data.value,
                        // 'password': 'Password!',
                        // 'grant_type': 'password'
                    })
                })
            });
        return price



    }

    useEffect(() => {
        document.body.style.backgroundColor = "#1B2128"

    },[])

    useEffect(() => {

        const id = setInterval(() => {
            callApi()
            setCheck(check + 1)
        }, 5000);
        return () => clearInterval(id);
    }, [check])


    return (
        <Container maxWidth={"xl"}>
            <ThemeProvider theme={muiTheme}>

            <Grid container style={{backgroundColor: '#1B2128'}}>
                <Grid item xs={8}>
                    <Line

                        // key={Math.random()* price}
                        data={data}
                        width={400}
                        height={200}
                    />
                </Grid>



                <Grid item xs={4}>
                    <Box m={1}>
                        <h2 style={{color:"#FFFFFF"}}>Prix: {price.toFixed(2)} €</h2>
                        <h2 style={{color: variation > 0 ? "green" : "red", verticalAlign: "middle"}}>{variation>0 ? <ArrowUpwardIcon/> : <ArrowDownward/>} {variation.toFixed(2)} %</h2>
                    </Box>

                    <Box>
                        <Typography style={{color:"#FFFFFF"}} gutterBottom>
                            Quantité d'achat
                        </Typography>
                        <Slider
                            defaultValue={30}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks={marks}
                            min={0}
                            max={100}
                            onChange={ (event, value) => {{setQuantity(value)}}}
                        />
                    </Box>
                    <Grid container>
                        <Grid>
                            <Box>

                                <Typography style={{color:'#FFFFFF'}}>{quantity} Efficoin</Typography>
                            </Box>

                            <Box alignContent={'right'}>

                                <Typography style={{color:'#F1CB2E'}}>Total {calculPrice(price,quantity).toFixed(2)} € </Typography>
                            </Box>
                        </Grid>


                        <Grid>

                        </Grid>
                    </Grid>


                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Vendre
                        </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AddShoppingCartOutlined />}
                    >
                        Acheter
                    </Button>



                </Grid>




            </Grid>
            </ThemeProvider>

        </Container>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/price`)
    const person = await res.json()


    // Pass data to the page via props
    return { props: { person } }
}


export async function getRandomAPI() {
    const price = await fetch('http://localhost:3000/api/price');
    console.log(price)


    let prix = await price.json();
    return {
        persons: prix.data
    };
}


