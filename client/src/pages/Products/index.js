/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import { FaPlus, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdModeEdit, MdDeleteForever, MdZoomIn } from 'react-icons/md';
import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';
import StarRatings from 'react-star-ratings';

import {
    Container,
    Content,
    ProductExtra,
    ProductButtons,
    ProductList,
    ProductNew,
    ProductEdit,
    ProductDetails,
    ProductText,
    Footer
} from './styles';

import Card from '../../components/Card';
import api from '../../services/api';
import { store } from '../../store';

const schema = Yup.object().shape({
    product: Yup.string().required('Name is required'),
    product_detail: Yup.string().required('Detail is required'),
    rating: Yup.number()
});

function longStringsHandler(string) {
    if (string.length > 8) {
        return `${string.substr(0, 8)}...`;
    }
    return string;
}

async function createNotification(product, action) {
    const notification = {
        notification: `O produto ${product} foi ${action}`,
        seen: false
    };
    await api.post('api/notifications', notification);
}

export default function Dashboard() {
    const { signed } = store.getState().auth;
    const [products, setProducts] = useState([
        {
            product: '',
            product_detail: '',
            rating: 3,
            createdAt: ''
        }
    ]);

    const [extra, setExtra] = useState({
        id: 0,
        product: 'Sem produto',
        product_detail: 'Sem detalhes',
        createdAt: '01/01/0001',
        rating: 0,
        new: 'none',
        details: 'flex',
        edit: 'none'
    });

    const [created, setCreated] = useState(0);
    const [updated, setUpdated] = useState(0);
    const [deleted, setDeleted] = useState(0);
    const [rating, setRating] = useState(0);

    const extraRef = useRef();

    function handleNew() {
        extraRef.current.scroll({
            top: 1000,
            behavior: 'smooth'
        });
        setExtra({
            new: 'flex',
            details: 'none',
            edit: 'none'
        });
    }

    function handleEdit({ id, product, product_detail, createdAt, rating }) {
        extraRef.current.scroll({
            top: 1000,
            behavior: 'smooth'
        });
        setExtra({
            id,
            product,
            product_detail,
            createdAt,
            rating,
            new: 'none',
            details: 'none',
            edit: 'flex'
        });
    }

    function handleDetail({ id, product, product_detail, createdAt, rating }) {
        extraRef.current.scroll({
            top: 1000,
            behavior: 'smooth'
        });
        setExtra({
            id,
            product,
            product_detail,
            createdAt,
            rating,
            new: 'none',
            details: 'flex',
            edit: 'none'
        });
    }

    function handleRating(rate) {
        setRating(rate);
    }

    function handleImageClick() {
        toast.warn('Apenas o admin pode alterar imagens');
    }
    async function handleNewSubmit(data) {
        if (!signed) {
            toast.error(
                'Apenas usuários cadastrados podem modificar, criar ou alterar produtos'
            );
        } else {
            await api.post('api/products', { ...data, rating });
            toast.success('Produto criado');
            createNotification(data.product, 'criado');
            setCreated(created + 1);
        }
    }

    async function handleEditSubmit(data) {
        if (!signed) {
            toast.error(
                'Apenas usuários cadastrados podem modificar, criar ou alterar produtos'
            );
        } else {
            await api.put(`api/products?id=${extra.id}`, { ...data, rating });
            toast.success('Produto atualizado');
            createNotification(data.product, 'alterado');
            setUpdated(updated + 1);
        }
    }

    async function handleDeleteSubmit(id) {
        if (!signed) {
            toast.error(
                'Apenas usuários cadastrados podem modificar, criar ou alterar produtos'
            );
        } else {
            toast.error('Produto removido');
            await api.delete(`api/products?id=${id}`);
            createNotification(id, 'deletado');
            setDeleted(deleted + 1);
        }
    }

    async function loadProducts() {
        const response = await api.get('api/products');
        const { data } = response;

        setProducts(data);
    }

    useEffect(() => {
        loadProducts();
    }, [created, updated, deleted]);

    return (
        <Container>
            <header>
                <strong>Produtos</strong>
                <aside>
                    <div onClick={handleNew}>
                        <FaPlus size={12} color="#fff" />
                        <span>Novo produto</span>
                    </div>
                </aside>
            </header>

            <Content ref={extraRef}>
                <ProductList>
                    <ul>
                        {products.map(product => (
                            <Card key={product.id}>
                                <ProductText>
                                    <span>{product.id}</span>
                                    <span>
                                        {longStringsHandler(product.product)}
                                    </span>
                                    <span>
                                        {longStringsHandler(
                                            product.product_detail
                                        )}
                                    </span>
                                </ProductText>
                                <ProductButtons>
                                    <MdModeEdit
                                        size={24}
                                        color="#000"
                                        onClick={() => handleEdit(product)}
                                        style={{
                                            marginLeft: 10,
                                            cursor: 'pointer'
                                        }}
                                    />
                                    <MdZoomIn
                                        size={24}
                                        color="#000"
                                        onClick={() => handleDetail(product)}
                                        style={{
                                            marginLeft: 10,
                                            cursor: 'pointer'
                                        }}
                                    />
                                    <MdDeleteForever
                                        size={24}
                                        color="#000"
                                        onClick={() =>
                                            handleDeleteSubmit(product.id)
                                        }
                                        style={{
                                            marginLeft: 10,
                                            cursor: 'pointer'
                                        }}
                                    />
                                </ProductButtons>
                            </Card>
                        ))}
                    </ul>
                </ProductList>
                <ProductExtra>
                    <ProductNew display={extra.new}>
                        <h1>Novo</h1>
                        <Form schema={schema} onSubmit={handleNewSubmit}>
                            <Input
                                name="product"
                                type="string"
                                placeholder="Nome do produto"
                            />
                            <Textarea
                                name="product_detail"
                                type="string"
                                placeholder="Descrição"
                            />
                            <StarRatings
                                rating={rating}
                                starRatedColor="#0095ff"
                                starHoverColor="#0095ff"
                                starDimension="30px"
                                starSpacing="4px"
                                changeRating={handleRating}
                                numberOfStars={5}
                                name="rating"
                            />

                            <button type="submit">Criar</button>
                        </Form>
                    </ProductNew>
                    <ProductDetails display={extra.details}>
                        <h1>Detalhes</h1>
                        <div onClick={handleImageClick}>
                            <img
                                alt="watermelon"
                                src="https://static.seattletimes.com/wp-content/uploads/2017/07/7b4c85c2-6687-11e7-8665-356bf84600f6-1560x1040.jpg"
                            />
                        </div>

                        <span>{extra.product}</span>
                        <span>{extra.product_detail}</span>
                        <span>{`Created at: ${format(
                            new Date(
                                extra.createdAt
                                    ? extra.createdAt
                                    : '2019/01/01 00:00:00'
                            ),
                            'yyyy-MM-dd'
                        )}`}</span>
                        <span>{`Rate: ${extra.rating}`}</span>
                    </ProductDetails>
                    <ProductEdit display={extra.edit}>
                        <h1>Editar</h1>
                        <div onClick={handleImageClick}>
                            <img
                                alt="watermelon"
                                src="https://static.seattletimes.com/wp-content/uploads/2017/07/7b4c85c2-6687-11e7-8665-356bf84600f6-1560x1040.jpg"
                            />
                        </div>
                        <Form schema={schema} onSubmit={handleEditSubmit}>
                            <Input
                                name="product"
                                type="string"
                                placeholder={extra.product}
                            />
                            <Textarea
                                name="product_detail"
                                type="string"
                                placeholder={extra.product_detail}
                            />
                            <StarRatings
                                rating={rating}
                                starRatedColor="#0095ff"
                                starHoverColor="#0095ff"
                                starDimension="30px"
                                starSpacing="4px"
                                changeRating={handleRating}
                                numberOfStars={5}
                                name="rating"
                            />

                            <button type="submit">Atualizar</button>
                        </Form>
                    </ProductEdit>
                </ProductExtra>
            </Content>
            <Footer>
                <a
                    href="https://github.com/Lucas-Fonte/Pineapple"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaGithub color="#fff" size="20px" />
                </a>
                <a
                    href="https://www.linkedin.com/in/lucas-fonte-02b03a164/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaLinkedin color="#fff" size="20px" />
                </a>
            </Footer>
        </Container>
    );
}
