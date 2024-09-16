
import { styled } from '@mui/system'; // Correct import

// Using the styled utility correctly
const Container = styled('div')({
 height:'400px',
 backgroundColor:'gray',
 textAlign:'center'
 
});



const Home = () => {
  return (
<>
<Container>
    Home
</Container>
</>
  );
};

export default Home;
