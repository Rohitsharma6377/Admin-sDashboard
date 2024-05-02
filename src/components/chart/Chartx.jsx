import React from 'react'
import ReactEcharts from 'echarts-for-react'
import * as echarts from 'echarts'
import chart from '../chart/chart.module.css'
import { Opacity } from '@material-ui/icons'
import { color } from 'echarts'

const Chartx = () => {
  const option = {
    color:['var(--orange)'],
    toolbox:{
      feature:{
        
      }
    },
    tooltip:{
      trigger:"axis",
      axisPointer:{
        type:"cross"
      },
      backgroundColor:"rgba(0,0,0,0.59)",
      borderWidth:0,
    },

    xAxis:[
     {
      type:'category',
      boundaryGap:false,
      data:["Mon","tue","Wed","Thu","Fri","Sat","Sun",]

     }
    ],
    yAxis:[
      {
        type:"value",
        splitLine:{
          show:false,
        }
      }
    ],
    series:[
      {
        type:"line",
        smooth:"true",
        lineStyle:{
          color: new echarts.graphic.LinearGradient(0,0,0,1,[{
            offset:0,
            color:"rgba(255,191,0)",
          },
        {
          offset:1,
          color:"#F450D3"
        }]),
        width:4
        },
        areaStyle:{
          Opacity:.5,
          color:new echarts.graphic.LinearGradient(0,0,0,0.8,[
            {
              offset:0,
              color:"#FE4C00"
            }, {
              offset:1,
              color:"rgba(255,144,70,0.1)"
            }
          ])
        },
        emphasis:{
          focus:"series",
          
        },
        showSymbol:false,
        data:[20000, 30000, 20000,30000, 60000,20000,25000]
      }
    ]
  }
  return (<div className={chart.charter}>
    
<div className={chart.pass}>
<ReactEcharts option={option}/>
</div>
  </div>
  )
}

export default Chartx;
