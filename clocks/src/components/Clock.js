export default function Clock(props) {
    let today = new Date();
    let hoursStyle, minutesStyle, secondsStyle;
    const rotation = (h, m, s) => {
        hoursStyle = {
            transform: `rotate(${h}deg)`
        };
        minutesStyle = {
            transform: `rotate(${m}deg)`
        }
        secondsStyle = {
            transform: `rotate(${s}deg)`
        }
    };

    let h = ((today.getHours()+(+props.hour)) % 12) + today.getMinutes() / 59;
    let m = today.getMinutes();
    let s = today.getSeconds();

    h *= 30;
    m *= 6;
    s *= 6;

    rotation(h, m, s);
  
    return (
        <div className="clocks-elem">
            <div>
                <p className="capital">{props.title}</p>
            </div>
            <div className="clock">
                <div className="hand hours" style={hoursStyle}></div>
                <div className="hand minutes" style={minutesStyle}></div>
                <div className="hand seconds" style={secondsStyle}></div>
                <div className="point"></div>
                <div className="marker">
                    <span className="marker__1"></span>
                    <span className="marker__2"></span>
                    <span className="marker__3"></span>
                    <span className="marker__4"></span>
                </div>
            </div>
        </div>        
    )
}