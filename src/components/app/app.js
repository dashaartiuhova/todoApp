import React from 'react';
import Images from '../images';

export default class App extends React.Component {
    id = 1;

    state={
        images:[
            this.addImg(),
            this.addImg(),
            this.addImg(),
            this.addImg(),
            this.addImg(),
            this.addImg(),
            this.addImg(),
            this.addImg(),
            this.addImg(),
            this.addImg()
        ]
    }

    addImg(){
        return(
            {id: this.id, value: 'image' + this.id, src: './img/'+(this.id++)+'.jpg'}
        );
    }

    /*
    addImage(arr){
        for(let i = 0; i<10; i++){
            const src = './public/img/'+ (i + 1)+'.jpg';
            arr.push({
                id: i,
                value: 'image'+ (i+1),
                src: src
            })
        }
        
        return arr;
    };

    setImages(){
        this.setState(()=> {this.addImage(this.state.images)});
    }*/

    render(){
        //this.setImages();
        
        const {images} = this.state;
        console.log(images);
        return (
            <div className="container mt-5 border shadow rounded-1 p-2">
                <Images imgList={images}/>
            </div>
        );
    };
};

