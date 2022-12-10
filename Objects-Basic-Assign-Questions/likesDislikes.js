function likesDislikes(obj){
    return obj.upvotes - obj.downvotes
}
console.log(likesDislikes({ upvotes: 13, downvotes: 0 }));