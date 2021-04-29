import Container from "@material-ui/core/Container";
import {Line} from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import {useEffect} from "react";

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

export default function Home({person}) {

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Making request"+{person});
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <Container maxWidth={"xl"}>

            <Grid container>
                <Grid item xs={8}>
                    <Line
                        data={data}
                        width={400}
                        height={200}
                    />
                </Grid>



                <Grid item xs={4}>
                    <Box m={1}>
                        <p>Prix: {person.name}</p>
                        <p>Variation: </p>
                    </Box>

                    <Box>
                        <Typography gutterBottom>
                            Custom marks
                        </Typography>

                        <Slider
                            defaultValue={30}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={10}
                            marks={marks}
                            min={10}
                            max={110}
                        />
                    </Box>
                </Grid>

            </Grid>


        </Container>
    )
}

export async function getServerSideProps() {
    const person = await getRandomAPI();
    return { props: { person } };
}

export async function getRandomAPI() {
    const res = await fetch('https://api.publicapis.org/random');
    const json = await res.json();
    return {
        name: json.entries[0].API,
        description: json.entries[0].Description,
    };
}
