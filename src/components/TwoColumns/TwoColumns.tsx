import React, {FC} from 'react';

type Props = {
    data: {
        attributesJSON:string
        name: string
    }
};

export const TwoColumns: FC<Props> = ({data}) => {
    const atts = JSON.parse(data.attributesJSON);

    return <div className="container">
        <div className={`row${atts.reverse ? ' flex-row-reverse' : ''}`}>
            <div className="col-md-6">
                <img src={atts.mediaUrl} width="80%"/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h2>{atts.title}</h2>
                <p>{atts.text}</p>
            </div>
        </div>
    </div>
};