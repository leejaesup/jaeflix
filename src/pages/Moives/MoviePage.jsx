import React, {useState} from 'react';
import {useSearchMovieQuery} from "../../hooks/useSearchMovie";
import {useSearchParams} from "react-router-dom";
import {Alert, Col, Row, Spinner} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from 'react-paginate';

const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const [page, setPage] = useState(1);
    const keyword = query.get("q");
    const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});
    // console.log("ddd", data);

    const handlePageClick = ({selected}) => {
        setPage(selected+1);

    }

    if (isLoading) {
        return (
            <div className="spinner-area">
                <Spinner
                    animation="border"
                    variant="danger"
                    style={{ width: "5rem", height: "5rem"}}
                />
            </div>
        );
    }
    if (isError) {
        <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <Container>
            <Row>
                <Col lg={4} xs={12}>
                    {" "}
                    필터{" "}
                </Col>
                <Col lg={8} xs={12}>
                    <Row>
                    {data?.results.map((movie, index) => (
                        <Col key={index} lg={4} xs={12}>
                            <MovieCard movie={movie}/>
                        </Col>
                    ))}
                    </Row>
                </Col>
            </Row>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={page-1}
            />
        </Container>
    );
};

export default MoviePage;