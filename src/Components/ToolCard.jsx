import "./ToolCard.css"
const ToolCard = (props) => {
    return (
        <div
            className='tool_card_div'
            onClick={() => {
                props.changeId(props.id);
                window.scrollTo(0, 0);
            }}
        >
            <div className="tool_card_img">
                <img
                    src={props.img_src}
                    fill
                    className=''
                    alt="no"
                />
            </div>
        </div>
    );
};

export default ToolCard;