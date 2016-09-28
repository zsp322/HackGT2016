//HackGT 2016 Data Visulaization Front-end project
//By using echart.js implement graphs including geometric graphs, pie chart and bar chart
//Author:Shuopeng Zhou

var myChart = echarts.init(document.getElementById('main'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'));

var data = [
                    {name : 'AL', value : 13},
                    {name : 'AK', value : 7},
                    {name : 'AZ', value : 50},
                    {name : 'AR', value : 2},
                    {name : 'CA', value : 119},
                    {name : 'CO', value : 93},
                    {name : 'CT', value : 3},
                    {name : 'DE', value : 1},
                    {name : 'DC', value : 0},
                    {name : 'FL', value : 88},
                    {name : 'GA', value : 40},
                    {name : 'HA', value : 18},
                    {name : 'ID', value : 0},
                    {name : 'IL', value : 15},
                    {name : 'IN', value : 18},
                    {name : 'IA', value : 9},
                    {name : 'KS', value : 11},
                    {name : 'KY', value : 0},
                    {name : 'LA', value : 7},
                    {name : 'ME', value : 2},
                    {name : 'MD', value : 8},
                    {name : 'MA', value : 3},
                    {name : 'MI', value : 19},
                    {name : 'MN', value : 0},
                    {name : 'MS', value : 0},
                    {name : 'MO', value : 6},
                    {name : 'MT', value : 8},
                    {name : 'NE', value : 0},
                    {name : 'NV', value : 6},
                    {name : 'NH', value : 8},
                    {name : 'NJ', value : 115},
                    {name : 'NM', value : 3},
                    {name : 'NY', value : 180},
                    {name : 'NC', value : 17},
                    {name : 'ND', value : 1},
                    {name : 'OH', value : 44},
                    {name : 'OK', value : 7},
                    {name : 'OR', value : 8},
                    {name : 'PA', value : 11},
                    {name : 'R.I.', value : 2},
                    {name : 'SC', value : 26},
                    {name : 'SD', value : 0},
                    {name : 'TN', value : 25},
                    {name : 'TX', value : 146},
                    {name : 'UT', value : 1},
                    {name : 'VT', value : 0},
                    {name : 'VA', value : 37},
                    {name : 'WA', value : 52},
                    {name : 'WV', value : 3},
                    {name : 'WI', value : 5},
                    {name : 'WY', value : 0},
                    {name : 'PR', value : 0}
                ];
var geoCoordMap = {
    'WA':[-122.33,47.61],
    'AL':[-86.90,32.32],   //ALABMA
    'AK':[-149.49,64.20],
    'AZ':[-111.09,34.05],
    'AR':[-91.83,35.20],
    'CA':[-119.42,36.79],
    'CO':[-105.782067,39.550051],
    'CT':[-73.087749,41.603221],
    'DE':[-75.52767,38.910833],
    'DC':[-77.036871,38.907192],
    'FL':[-81.515754,27.664827],
    'GA':[ -82.900075,32.165622],
    'HI':[-155.582782, 19.896766],
    'ID':[-114.74204,44.068202],
    'IL':[-89.398528,40.633125],
    'IN':[-86.158068,39.768403],
    'IA':[-93.097702,41.878003],
    'KS':[-98.484246,39.011902],
    'KY':[ -84.270018,37.839333],
    'LA':[-91.962333,30.984298],
    'ME':[-69.445469,45.253783],
    'MD':[-76.641271,39.045755],
    'MA':[-71.382437,42.407211],
    'MI':[-85.602364,44.314844],
    'MN':[-94.6859,46.729553],
    'MS':[-89.398528,32.354668],
    'MO':[-91.831833,37.964253],
    'MT':[-110.362566,46.879682],
    'NE':[-99.901813,41.492537],
    'NV':[-116.419389,38.80261],
    'NH':[-71.572395,43.193852],
    'NJ':[-74.405661,40.058324],
    'NM':[-105.87009,34.51994],
    'NY':[-74.005941,40.712784],
    'NC':[-79.0193,35.759573],
    'ND':[-101.002012,47.551493],
    'OH':[-82.907123,40.417287],
    'OK':[ -97.092877,35.007752],
    'OR':[-120.694647,44.296898],
    'PA':[-77.194525,41.203322],
    'R.I.':[-71.477429,41.580095],
    'SC':[-81.163724,33.836081],
    'SD':[-99.901813,43.969515],
    'TN':[86.580447,35.517491],
    'TX':[-99.901813,31.968599],
    'UT':[-111.093731,39.32098],
    'VT':[-72.577841,44.558803],
    'VA':[-78.656894,37.431573],
    'WA':[-120.740139,47.751074],
    'WV':[-80.454903,38.597626],
    'WI':[-88.787868,43.78444],
    'WY':[-107.290284,43.075968],
}
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

myChart.showLoading();
$.get('USA_geo.JSON', function (usaJson) {
    myChart.hideLoading();
    myChart2.hideLoading();
    myChart3.hideLoading();
    echarts.registerMap('USA', usaJson, {
        Alaska: {             
            left: -131,
            top: 25,
            width: 15
        },
        Hawaii: {
            left: -110,        
            top: 28,
            width: 5
        },
        'Puerto Rico': {       
            left: -76,
            top: 26,
            width: 2
        }
    });

    
    option1 = {
        backgroundColor: '#003',
        title : {
            text: 'Donald Trump related tweets',

            left: 'left'
        },
        tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 180,
        calculable: true,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        }
    },
        geo: {
        map: 'USA',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
        // tooltip : {
        //     trigger: 'item',
        //     showDelay: 0,
        //     transitionDuration: 0.2,
        //     formatter : function (params) {
        //         var value = (params.value + '').split('.');
        //         value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
        //         return params.seriesName + '<br/>' + params.name + ' : ' + value;
        //     }
        // },
        series : [
            {
                name: 'USA PopEstimates',
                type: 'scatter',
                coordinateSystem: 'geo',
                data:convertData(data),
                
                roam: false,
                map: 'USA',
                itemStyle:{
                    emphasis:{label:{show:true}}
                },

        
                textFixed : {
                    Alaska : [20, -20]
                },
               
            },
            {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value /10 - a.value/10;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 6;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
    option2 = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:180, name:'New York'},
                {value:146, name:'Texas'},
                {value:119, name:'California'},
                {value:115, name:'New Jersey'},
                {value:93, name:'Colorado'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
option3 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['NY', 'Texas', 'Colorado', 'New Jersey', 'California'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'tweets',
            type:'bar',
            barWidth: '60%',
            data:[180,146,93,115,119]
        }
    ]
};

        myChart.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
});