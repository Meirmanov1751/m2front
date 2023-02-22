import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useSWR from "swr";
import {Building} from "../../../store/models/building.interface";
import {IBuildingPrice} from "../../../store/models/building.price.interface";
import moment from "../../../utils/moment";
import {Moment} from "moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//     labels,
//     datasets: [
//         {
//             fill: true,
//             label: 'Dataset 2',
//             data: labels.map(() => Math.random()),
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//     ],
// };

export function ChartComponent({building}: {building: Building}) {
    const {data, isLoading} = useSWR<IBuildingPrice[]>(`/api/building-price?building_id=${building._id}`);
    if (isLoading) return null;
    const labels: string[] = [];
    const prices: number[] = [];
    data!.map((price=>{
        labels.push(moment(price.date).format("MM-DD-YYYY"))
        prices.push(price.price)
    }))
    const chartData = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Изменение цен на m2',
                data: prices,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    }


    return <Line options={options} data={chartData} />;
}
