  // ## Array Cardio Day 2

  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
 
 // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const isPerson19orOlder = people.some(p => 2022 - p.year >= 19);
    console.log(`Is at least one person 19 or older? Answer: ${isPerson19orOlder}`);
    // Array.prototype.every() // is everyone 19 or older?
    const isAll19orOlder = people.every(p => 2022- p.year >= 19);
    console.log(`Is everyone 19 or older? Answer: ${isAll19orOlder}`);
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const id = 823423;
    const findCommentById = comments.find(c => c.id == id);
    console.log(`Search/Find comment by ID: ${findCommentById ? findCommentById.text : 'No comment'}`); 

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const indexOfArray = comments.findIndex(c => c.id == id);
    console.table(comments.splice(indexOfArray, 1));
    console.table(comments);