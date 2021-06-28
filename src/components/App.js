import React, { useState } from "react";
import ModalButton from "./ModalButton";
import FilterLink from "./FilterLink";
import LinkList from "./LinkList";
import Profile from "./Profile";
//***********bootstrap**********
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [filter, setFilter] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "facebook",
      url: "www.facebook.com",
      tags: ["social-media", "posting", "my-life"]
    },
    {
      id: 2,
      title: "twitch",
      url: "www.twitch.com",
      tags: ["social-media", "streaming", "donations", "gaming"]
    },
    {
      id: 3,
      title: "youtube",
      url: "www.youtube.com",
      tags: ["social-media", "streaming", "subscribe", "videos"]
    },
    {
      id: 4,
      title: "reddit",
      url: "www.reddit.com",
      tags: ["social-media", "reading", "news", "upvote"]
    },
  ])

  function handleSubmit(event) {
    console.log("Event", event)
    event.preventDefault();
    console.log("clicked");
    let newTags = tags.split(",");
    for (let i = 0; i < newTags.length; i++) {
      newTags[i] = newTags[i].trim();
    }
    console.log(newTags);
    const newLink = {
      title: title,
      url: url,
      tags: newTags
    };
    console.log("Able to submit new link: ", newLink);
    let newLinks = links.concat(newLink);
    console.log(newLinks);
    setLinks(newLinks);
  }

  function titleOnChange(event) {
    let newTitle = event.target.value;
    console.log("this is the new title:", newTitle);
    setTitle(newTitle);
  }
  function urlOnChange(event) {
    let newUrl = event.target.value;
    console.log("this is the new URL:", newUrl);
    setUrl(newUrl);
  }

  function tagsOnChange(event) {
    let newTags = event.target.value;
    console.log("this is the new URL:", newTags);
    setTags(newTags);
  }

  function filterLinks(filter) {
    let filterInput = filter.toLowerCase();
    return links.filter((link) => {
      return link.url.toLowerCase().indexOf(filterInput) > -1 || link.tags.map((tag) => {
        console.log("filter tags: ", tag.toLowerCase().indexOf(filterInput))
        return (tag.toLowerCase().indexOf(filterInput)) > -1;
      })
        .indexOf(true) > -1
    })
  }

  function filterOnChange(event) {
    let newFilter = event.target.value;
    setFilter(newFilter);
  }


  return (
    <Container>
      <Row>
        <Col lg="2">
          <Row><Profile faveLinks="200" sharedLinks="100" /></Row>
          <Row><ModalButton onFormSubmit={handleSubmit}
            titleOnChange={titleOnChange}
            title={title}
            urlOnChange={urlOnChange}
            url={url}
            tagsOnChange={tagsOnChange}
            tags={tags} /></Row>
          <Row></Row>
        </Col>
        <Col lg="9"><FilterLink filter={filter} filterOnChange={filterOnChange} />
          <LinkList links={links} links={filterLinks(filter)} /></Col>
      </Row>
      <Row>

      </Row>



    </Container >

  );
}

export default App;

