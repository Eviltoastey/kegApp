import React from 'react';
import styled from 'styled-components';

const ReviewTeaser = () => {

    const Card = styled.div`
        margin: 0.5rem
    `;

    return (
        <Card className="card p-3 text-right">
            <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
            </footer>
            </blockquote>
        </Card>
    );
}

export default ReviewTeaser;