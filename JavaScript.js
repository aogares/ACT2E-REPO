import { getDatabase } from "firebase/database";

const database = getDatabase();

import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

import { getDatabase, ref, onValue} from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

    update(ref(database, 'users/' + username),{
      email: email,
      username: username, 
      })
      alert('updated');
    });

 // remove data
    removeData.addEventListener('click',(e) => {
     var username = 'Your username';
    
     remove(ref(database, 'table_or_category/' + username));
     alert('removed');
    });
