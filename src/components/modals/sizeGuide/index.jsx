import React, { useContext } from 'react';
import {
    Container,
    Content,
    Header,
    CloseBtn,
    Table
} from './styles'
import ModalContext from '../../../context/modalState/Context'

const SizeGuide = () => {
    const { closeModal } = useContext(ModalContext)

    return (
        <Container>
            <Header>
                <h2>Size guide</h2>
                <CloseBtn onClick={() => closeModal()} >
                    <i className="fas fa-times"></i>
                </CloseBtn>

            </Header>
            <Content>
                <Table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>US</th>
                            <th>Length</th>
                            <th>Waist Size</th>
                            <th>Hip Size</th>
                            <th>Thigh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XXS</td>
                            <td>0</td>
                            <td>39</td>
                            <td>24.8</td>
                            <td>36.2</td>
                            <td>22.4</td>
                        </tr>
                        <tr>
                            <td>XS</td>
                            <td>2</td>
                            <td>39.4</td>
                            <td>26.8</td>
                            <td>37.2</td>
                            <td>23.4</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>4</td>
                            <td>39.8</td>
                            <td>28</td>
                            <td>39.4</td>
                            <td>24.1</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>6</td>
                            <td>40.2</td>
                            <td>29</td>
                            <td>40.5</td>
                            <td>25.8</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>8/10</td>
                            <td>40.6</td>
                            <td>31.1</td>
                            <td>42.5</td>
                            <td>25.8</td>
                        </tr>

                    </tbody>
                </Table>
            </Content>
        </Container>
    )
}

export default SizeGuide;