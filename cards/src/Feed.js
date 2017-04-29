const posts = [
  {"likes": 846, "comments": 5},
  {"likes": 207, "comments": 15},
  {"likes": 45, "comments": 35},
  {"likes": 5, "comments": 0},
  {"likes": 45, "comments": 32},
  {"likes": 86, "comments": 86},
  {"likes": 87, "comments": 5},
  {"likes": 10885, "comments": 5},
  {"likes": 86, "comments": 5},
  {"likes": 76, "comments": 5},
  {"likes": 5, "comments": 5},
  {"likes": 2, "comments": 5},
  {"likes": 846, "comments": 5},
  {"likes": 207, "comments": 15},
  {"likes": 45, "comments": 35},
  {"likes": 5, "comments": 0},
  {"likes": 45, "comments": 32},
  {"likes": 86, "comments": 86},
  {"likes": 87, "comments": 5},
  {"likes": 10885, "comments": 5},
  {"likes": 86, "comments": 5},
  {"likes": 76, "comments": 5},
  {"likes": 5, "comments": 5},
  {"likes": 2, "comments": 5},
  {"likes": 846, "comments": 5},
  {"likes": 207, "comments": 15},
  {"likes": 45, "comments": 35},
  {"likes": 5, "comments": 0},
  {"likes": 45, "comments": 32},
  {"likes": 86, "comments": 86},
  {"likes": 87, "comments": 5},
  {"likes": 10885, "comments": 5},
  {"likes": 86, "comments": 5},
  {"likes": 76, "comments": 5},
  {"likes": 5, "comments": 5},
  {"likes": 2, "comments": 5}
];

import React from 'react';
import Card from './Card';

export default function() {
    return (
        <div className="Feed">
            {posts.map((post, index) => {
                return <Card key={index} likes={post.likes} comments={post.comments}/>;
            })}
        </div>
    );
}