import EChartsReact from "echarts-for-react";
import * as echarts from "echarts";

const Chart = () => {

    const option = {

        color: ['var(--blue)'],

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
            },
            backgroundColor: 'white',
            borderWidth: 0
        },

        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: false,
        },

        xAxis: [ {
            type: "category",
            boundaryGap: false,
            data: ["1", "5", "10", "15", "20", "25", "30"]
        } ],

        yAxis: [{
            type: "value",
            splitLine: {
                show: false
            },
        }],
        series: [{
            type: "line",
            smooth: true,
            lineStyle: {
                color: '#1974CD',
                width: 4,
            },
            areaStyle: {
                opacity: .5,
                color: '#1974CD1F'
            },
            emphasis: {
                focus: "series",
            },
            showSymbol: false,
            data: [100453500, 120134567, 260145762, 150120832, 300567432, 120097123, 240881349],
        }]
    }


  return (
    <>
        <div className="bg-white rounded-md px-2 pb-3 pt-6 mt-4 mb-6">
            <div className="px-6 flex justify-between">
                <div className="flex gap-1">
                    <h3 className="text-xl">Total Users</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 opacity-50 mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </div>
                <div className="flex gap-3">
                    <hr className="w-16 border-2 mt-4" />
                    <p className="opacity-50 mt-1">Provisions: March</p>
                    <div className="rounded-md border cursor-pointer flex px-4 gap-3 w-fit">
                        <p>March</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            <EChartsReact option={option} className='w-full h-24'
            />
        </div>
    </>
    
  )
}

export default Chart