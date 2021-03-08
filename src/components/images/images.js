import React from 'react';

const Images = ({imgList}) => {

    
    const list = imgList.map((imgList)=>{
        const {id, value, src} = imgList;
        return(
            <div className="col-md-4" key={id}>
                    <img name={value}
                    src={src}
                    width="100%"
                    className="border shadow-sm rounded my-2"
                />
            </div>
        );
    });

    return(
        <div className="row">
            {list}
        </div>
    )
}

export default Images;