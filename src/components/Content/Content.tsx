import React, {FC} from 'react';
import {Paragraph, TwoColumns} from "../index";

type Props = {

};
export const Content: FC<Props> = ({content}) => {
    console.log(content)
   switch (content.name) {
       case "core/paragraph":
           return <Paragraph data={content} />
        case "wisehunter/twocolumns":
           return <TwoColumns data={content} />
   }
};