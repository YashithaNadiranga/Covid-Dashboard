import React from 'react';

function Card(props) {
    const colours = props.color;
    const cla = "card text-white mb-3 text-center ";
    return (
        <div>
            <div className={cla + "bg-" + colours}>
                <div className="card-body">
                    <h1 className="card-title" style={{padding:"0px", margin:"0px"}}>{props.cheader}</h1>
                    <p style={{fontSize: "20px"}} className="card-text">{props.ccontent}</p>
                </div>
                <div className="card-footer">
                    <small className="text-light">Last Updated - {props.update}</small>
                </div>
            </div>
        </div>
    );
}

export default Card;
