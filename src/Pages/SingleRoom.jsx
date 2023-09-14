// import React, { Component } from "react";

// import { Link } from "react-router-dom";
// import axios from "axios";


// // import assets
// import defaultBcg from "../assets/img/jpeg/room-1.jpeg";

// // import components
// import Banner from "../Components/Banner/Banner";
// import { RoomContext } from "../Context/Context";
// import StyledHero from "../Components/StyledHero/StyledHero";

// export default class SingleRoom extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   // console.log(this.props);
//   //   this.state = {
//   //     slug: this.props.match.params.slug,
//   //     defaultBcg,
//   //   };
//   // }
//   constructor(props) {
//     super(props);
//     this.state = {
//       slug: this.props.match.params.slug,
//       defaultBcg,
//       name: "",
//       description: "",
//       capacity: "",
//       size: "",
//       price: "",
//       extras: [],
//       breakfast: false,
//       pets: false,
//       images: [],
//     };
//   }

//   static contextType = RoomContext;
//   componentDidMount() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);
//     if (room) {
//       this.setState({
//         name: room.name,
//         description: room.description,
//         capacity: room.capacity,
//         size: room.size,
//         price: room.price,
//         extras: room.extras,
//         breakfast: room.breakfast,
//         pets: room.pets,
//         images: room.images,
//       });
//     }
//   }
//   // componentDidMount() {}
//   handleBook = () => {
//     const { slug, name, price, size } = this.state;
//     axios
//       .post("http://localhost:8081/book", {
//         slug,
//         name,
//         price,
//         size,
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   render() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);
//     const handles=()=>{

//     }
//     if (!room) {
//       return (
//         <div className="error">
//           <h3>no such room could be found!</h3>
//           <Link to="/rooms" className="btn-primary">
//             back to rooms
//           </Link>
//         </div>
//       );
//     }

//     const {
//       name,
//       description,
//       capacity,
//       size,
//       price,
//       extras,
//       breakfast,
//       pets,
//       images,
//     } = room;

//     const [mainImg, ...defaultImg] = images;

//     return (
//       <>
//         <StyledHero img={mainImg || this.state.defaultBcg}>
//           <Banner title={`${name} room`}>
//             <Link to="/rooms" className="btn-primary">
//               back to rooms
//             </Link>
//           </Banner>
//         </StyledHero>

//         <section className="single-room">
//           <div className="single-room-images">
//             {defaultImg.map((item, index) => {
//               return <img key={index} src={item} alt={name} />;
//             })}
//           </div>

//           <div className="single-room-info">
//             <article className="desc">
//               <h3>details:</h3>
//               <p>{description}</p>
//             </article>

//             <article className="info">
//               <h3>information:</h3>
//               <h6>price : ${price}</h6>
//               <h6>size : {size} SQFT</h6>
//               <h6>
//                 max capacity :{" "}
//                 {capacity > 1 ? `${capacity} people` : `${capacity} person`}
//               </h6>
//               <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
//               <h6>{breakfast && "free breakfast included"}</h6>
//             </article>
//           </div>
//         </section>

//         <section className="room-extras">
//           <h6>extras:</h6>
//           <ul className="extras">
//             {extras.map((item, index) => {
//               return <li key={index}> - {item}</li>;
//             })}
//           </ul>
//         </section>
//           <button onClick={this.handleBook}>Book</button>
//       </>
//     );
//   }
// }


import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import assets
import defaultBcg from "../assets/img/jpeg/room-1.jpeg";

// import components
import Banner from "../Components/Banner/Banner";
import { RoomContext } from "../Context/Context";
import StyledHero from "../Components/StyledHero/StyledHero";

const SingleRoom = ({ match }) => {
  const { getRoom } = useContext(RoomContext);
  const [room, setRoom] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [extras, setExtras] = useState([]);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  const [images, setImages] = useState([]);
  const [mainImg, setMainImg] = useState(null);

  useEffect(() => {
    const room = getRoom(match.params.slug);
    if (room) {
      setRoom(room);
      setName(room.name);
      setDescription(room.description);
      setCapacity(room.capacity);
      setSize(room.size);
      setPrice(room.price);
      setExtras(room.extras);
      setBreakfast(room.breakfast);
      setPets(room.pets);
      setImages(room.images);
      setMainImg(room.images[0]);
    }
  }, [getRoom, match.params.slug]);

  const handleBook = () => {
    axios
      .post("http://localhost:8081/book", {
        slug: match.params.slug,
        name,
        price,
        size,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found!</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const [, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>

        <div className="single-room-info">
          <article className="desc">
            <h3>details:</h3>
            <p>{description}</p>
          </article>

          <article className="info">
            <h3>information:</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
        </section>

<section className="room-extras">
  <h6>extras:</h6>
  <ul className="extras">
    {extras.map((item, index) => {
      return <li key={index}> - {item}</li>;
    })}
  </ul>
</section>

<button onClick={handleBook}>Book</button>
</>
);
}

export default SingleRoom;






