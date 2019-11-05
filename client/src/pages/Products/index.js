/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdModeEdit, MdDeleteForever, MdZoomIn } from 'react-icons/md';

import {
    Container,
    Content,
    ProductExtra,
    ProductButtons,
    ProductList,
    ProductNew,
    ProductEdit,
    ProductDetails,
    ProductText
} from './styles';

import Card from '../../components/Card';
import api from '../../services/api';

export default function Dashboard() {
    const [products, setProducts] = useState([]);
    const [extra, setExtra] = useState({
        new: 'none',
        details: 'block',
        edit: 'none'
    });

    async function loadProducts() {
        const response = await api.get('api/products');
        const { data } = response;

        setProducts(data);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    function handleNew() {
        setExtra({
            new: 'block',
            details: 'none',
            edit: 'none'
        });
    }

    function handleDetail() {
        setExtra({
            new: 'none',
            details: 'block',
            edit: 'none'
        });
    }

    function handleEdit() {
        setExtra({
            new: 'none',
            details: 'none',
            edit: 'block'
        });
    }

    function handleDelete() {}
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

            <Content>
                <ProductList>
                    <ul>
                        {products.map(product => (
                            <Card key={product.id}>
                                <ProductText>
                                    <span>{product.id}</span>
                                    <span>{product.product}</span>
                                    <span>{product.product_detail}</span>
                                    <span>{product.created_at}</span>
                                </ProductText>
                                <ProductButtons>
                                    <MdModeEdit
                                        size={24}
                                        color="#000"
                                        onClick={handleDetail}
                                        style={{
                                            marginLeft: 10,
                                            cursor: 'pointer'
                                        }}
                                    />
                                    <MdZoomIn
                                        size={24}
                                        color="#000"
                                        onClick={handleEdit}
                                        style={{
                                            marginLeft: 10,
                                            cursor: 'pointer'
                                        }}
                                    />
                                    <MdDeleteForever
                                        size={24}
                                        color="#000"
                                        onClick={handleDelete}
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
                    </ProductNew>
                    <ProductDetails display={extra.details}>
                        <h1>Detalhes</h1>
                    </ProductDetails>
                    <ProductEdit display={extra.edit}>
                        <h1>Editar</h1>
                    </ProductEdit>
                </ProductExtra>
            </Content>
        </Container>
    );
}
