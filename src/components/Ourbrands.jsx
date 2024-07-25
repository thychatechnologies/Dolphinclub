import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import './styles/ourBrands.css';
import { Autoplay } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Ourbrands() {
    return (
        <div className="our-partners my-sm-5 my-2">
            <Container>
                <Row>
                    <Col>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={15}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper mySwiperourbrands"
                        >
                            <SwiperSlide className='myswipermusgro'>
                                <div className="card">
                                    <img src="./assets/logoblack.png" className="card-img-top" alt="Partner 1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='myswipermusgro'>
                                <div className="card">
                                    <img src="./assets/logoblack.png" className="card-img-top" alt="Partner 1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='myswipermusgro'>
                                <div className="card">
                                    <img src="./assets/logoblack.png" className="card-img-top" alt="Partner 2" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='myswipermusgro'>
                                <div className="card">
                                    <img src="./assets/logoblack.png" className="card-img-top" alt="Partner 3" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='myswipermusgro'>
                                <div className="card">
                                    <img src="./assets/logoblack.png" className="card-img-top" alt="Partner 4" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='myswipermusgro'>
                                <div className="card">
                                    <img src="./assets/logoblack.png" className="card-img-top" alt="Partner 5" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Ourbrands;
