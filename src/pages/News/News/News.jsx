import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsode from '../EditorsInsite/EditorsInsode';
import { Helmet } from 'react-helmet-async';

const News = () => {
    const news = useLoaderData();

    const { _id, title, details, image_url, category_id } = news;
    return (
        <div>
            <Helmet>
                <title>News || The Journal Online</title>
            </Helmet>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All News in This Category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsode></EditorsInsode>
        </div>

    );
};

export default News;