function friendTemplate (friend) {
  return `<li>${friend.firstName} ${friend.lastName}</li>`;
}

function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  ul.innerHTML =
    Array
      .from(friends)
      .map(friend => friendTemplate(friend))
      .join('');

  return ul;
}
