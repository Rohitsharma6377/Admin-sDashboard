import React from 'react'
import ord from '../orderpie/ord.module.css'
import ReactEcharts from 'echarts-for-react'
import * as echarts from 'echarts'
const OrdersPiechart = () => {
    const option = {
        color:[
            new echarts.graphic.LinearGradient(0,0,0,1,[
                {
                    offset:0,
                color:"#1158E2"
                },
                {
                    offset:1,
            color:"#42B5F2"
                }
            ]),
            new echarts.graphic.LinearGradient(0,0,0,1,[
                {
                    offset:0,
                color:"#BC1FD7"
                },
                {
                    offset:1,
            color:"#7F1DD1"
                }
            ]),
            new echarts.graphic.LinearGradient(0,0,0,1,[
                {
                    offset:0,
                color:"#E8A618"
                },
                {
                    offset:1,
                    color:"#EB6B36"
                }
            ]),new echarts.graphic.LinearGradient(0,0,0,1,[
                {
                    offset:0,
                color:"#D131BE"
                },
                {
                    offset:1,
            color:"#BF1575"
                }
            ]),
        ],
     series:[
        {name:"Item",
        type:"pie",
        radius:["60%", "70%"],
        avoidLabelOverlap:false,
        itemStyle:{
            borderRadius:50,
            
            borderWidth:5,
        },
        label:{
            show:false,
            position:"center",
        },
        emphasis:{
            label:{
                show:true,
                fontSize:20,
                fontWeight:"bold"
            }
        },
            data:[
                {value: 2190 , name: "Search Engine"},
                {value: 910 , name: "Direct"},
                {value: 790 , name: "Email"},
                {value: 1190 , name: "Union"},
            ]
        }
     ]
    }
  return (
    <ReactEcharts style={{height:100 , marginTop:"1rem"}} option={option}/>
  )
}

export default OrdersPiechart;
