/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdModeEdit, MdDeleteForever, MdZoomIn } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

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
import { store } from '../../store';

const schema = Yup.object().shape({
    product: Yup.string().required('Name is required'),
    product_detail: Yup.string().required('Detail is required')
});

export default function Dashboard() {
    const { signed } = store.getState().auth;
    const [products, setProducts] = useState([
        {
            product: ''
        }
    ]);

    const [extra, setExtra] = useState({
        id: 0,
        new: 'none',
        details: 'flex',
        edit: 'none'
    });

    function handleNew() {
        setExtra({
            id: 0,
            new: 'flex',
            details: 'none',
            edit: 'none'
        });
    }

    function handleEdit(id) {
        setExtra({
            id,
            new: 'none',
            details: 'none',
            edit: 'flex'
        });
    }

    function handleDetail(id) {
        setExtra({
            id,
            new: 'none',
            details: 'flex',
            edit: 'none'
        });
    }

    async function handleNewSubmit(data) {
        if (!signed) {
            toast.error(
                'Apenas usuários cadastrados podem modificar, criar ou alterar produtos'
            );
        }
        await api.post('api/products', data);
        toast.success('Produto criado');
    }

    async function handleEditSubmit(data) {
        if (!signed) {
            toast.error(
                'Apenas usuários cadastrados podem modificar, criar ou alterar produtos'
            );
        }
        await api.put(`api/products?id=1`, data);
        toast.success('Produto atualizado');
    }

    async function handleDeleteSubmit(id) {
        if (!signed) {
            toast.error(
                'Apenas usuários cadastrados podem modificar, criar ou alterar produtos'
            );
        }
        toast.error('Produto removido');
        await api.delete(`api/products?id=${id}`);
        console.log(`deleted ${id}`);
    }

    async function loadProducts() {
        const response = await api.get('api/products');
        const { data } = response;

        setProducts(data);
    }

    useEffect(() => {
        loadProducts();
    }, [
        () => {
            handleDeleteSubmit;
        }
    ]);

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
                                        onClick={() => handleEdit(product.id)}
                                        style={{
                                            marginLeft: 10,
                                            cursor: 'pointer'
                                        }}
                                    />
                                    <MdZoomIn
                                        size={24}
                                        color="#000"
                                        onClick={() => handleDetail(product.id)}
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
                            <Input
                                name="product_detail"
                                type="string"
                                placeholder="Descrição"
                            />

                            <button type="submit">Enviar</button>
                        </Form>
                    </ProductNew>
                    <ProductDetails display={extra.details}>
                        <h1>Detalhes</h1>
                        <span>{products[0].product}</span>
                        <span>{products[0].product}</span>
                        <span>{products[0].product}</span>
                        <span>{products[0].product}</span>
                    </ProductDetails>
                    <ProductEdit display={extra.edit}>
                        <h1>Editar</h1>
                        <Form schema={schema} onSubmit={handleEditSubmit}>
                            <Input
                                name="product"
                                type="string"
                                placeholder="Nome do produto"
                            />
                            <Input
                                name="product_detail"
                                type="string"
                                placeholder="Descrição"
                            />

                            <button type="submit">Enviar</button>
                        </Form>
                    </ProductEdit>
                </ProductExtra>
            </Content>
        </Container>
    );
}
