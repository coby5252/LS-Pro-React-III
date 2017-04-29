import React from 'react';

export default function(props) {
  return(
    <div className="UserDetail">
        <h2>{props.user}</h2>
        <p>{props.posts} posts || {props.followers} followers || {props.following} following</p>
        <button>Follow</button>
    </div>
  );
}