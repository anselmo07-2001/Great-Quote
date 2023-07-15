import MainContainer from "../components/Layout/MainContainer"
import Line from "../components/Line";
import Container from "../components/Layout/Container";
import QuoteCard from "../components/QuoteCard";
import QuoteContainer from "../components/Layout/QuoteContainer";
import SortButton from "../components/SortButton";

const AllQuotes = () => {
    return (
        <MainContainer>
               <Container>
                  <SortButton/> 
                  <Line/>
                  <QuoteContainer/>
               </Container>
        </MainContainer>
    )
}

export default AllQuotes