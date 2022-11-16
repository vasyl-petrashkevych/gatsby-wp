import React, {FC} from 'react';

type Props = {

};

export const Paragraph: FC<Props> = ({data}) => {
    const atts = JSON.parse(data.attributesJSON);
    return <>
        <div className="container pt-3">
            <div className="row">
                <div className="col-md-12">
                    <p>
                        {atts.content}
                    </p>
                </div>
            </div>
        </div>
    </>
};