import React from "react";

import TopLine from "./TopLine";

var chartData= {
    labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
    datasets: [{
        backgroundColor: [
            "#899499",
            "#A9A9A9",
            "#808080",
            "#D3D3D3",
            "#E5E4E2",
            "#C0C0C0",
            "#848884",
        ],
    data: [12, 19, 3, 17, 28, 24, 7],
    fill: false,
    tension: 0,
    }],
}

export default {
    title: "TopLine",
    component: TopLine,
};

export const Default = () => {
    return <TopLine ridershipData={chartData} serviceData={chartData} />;
}