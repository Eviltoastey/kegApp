import React from 'react';
import styled from 'styled-components';

const KegTeaser = () => {

    const Card = styled.div`
        margin: 35px
    `;

    return (
        <Card className="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" className="btn btn-primary">Button</a>
            </div>
        </Card>
    );
}

export default KegTeaser;
