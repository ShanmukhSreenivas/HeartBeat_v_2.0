import ReactSpeedometer from "react-d3-speedometer"

export default function Gauge({ min, max, lim, value}) {


    const segmentstop = (min,max,lim,value) => {
        var segment_stops = []
        var adder = 0

        if(max >= 200){
            adder = 5
        }
        else if( max>= 100 && max < 200){
            adder = 2
        } 
        else if (max > 2 && max < 100){
            adder = 1
        }
        else{
            adder = 1 
        }
        if(lim > value){
            segment_stops = [min,min+1,value,lim,lim+adder,max-1,max]
            return segment_stops
        }
        else if(lim == value){
            segment_stops = [min,min+1,lim,lim+adder,max-1,max]
            return segment_stops
        }
        else{
            segment_stops = [min,min+1,lim,lim+adder,value,max-1,max]
            return segment_stops
        }
    }
    const segmentcolor = (lim,value) => {
        var segment_colors = []
        if(lim > value){
            segment_colors = ['#ff7e00','#ff7e00','#edeceb','black','#edeceb','#edeceb']
            return segment_colors
        }
        else if(lim == value){
            segment_colors = ['green','green','black','#edeceb','#edeceb']
            return segment_colors
        }
        else{
            segment_colors = ['red','red','black','red','#edeceb','#edeceb']            
            return segment_colors
        }

    }
    const segmentlabel = (min,max,lim,value) => {

        var segment_labels = []
        if(lim > value){
            segment_labels = [{ text:'0',position:'OUTSIDE',color:"black"},{color:"white"},{color:"white"},{color:"white"},{color:"white"},{ text:max,position:'OUTSIDE',color:"black"}]
            return segment_labels
        }
        else if(lim == value){
            segment_labels = [{ text:'0',position:'OUTSIDE',color:"black"},{color:"white"},{color:"white"},{color:"white"},{ text:max,position:'OUTSIDE',color:"black"}]            
            return segment_labels
        }
        else{
            segment_labels = [{ text:'0',position:'OUTSIDE',color:"black"},{color:"white"},{color:"white"},{color:"white"},{color:"white"},{ text:max,position:'OUTSIDE',color:"black"}]            
            return segment_labels
        }

    }


return(  
    
  
    <ReactSpeedometer
        width={145}
        height={100}
        ringWidth={20} 
        minValue={min}
        maxValue={max}
        value={value}    
        segments={2}
        needleHeightRatio={0.2}
        needleColor="white"
        customSegmentStops={segmentstop(min,max,lim,value)}
        customSegmentLabels={segmentlabel(min,max,lim,value)}
        segmentColors={segmentcolor(lim,value)}
        maxSegmentLabels={1}
        valueTextFontSize='10px'
        labelFontSize='8px'
    />
);
}