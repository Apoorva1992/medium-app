import ProfileForm from './ProfileForm';
import CreatePost from '../CreatePost/CreatePost';
import classes from './UserProfile.module.css';


const UserProfile = () => {
  return (
    <section className={`${classes.profile}`}>
      {/* <h1>Your User Profile</h1> */}
      {/* <ProfileForm /> */}
      <h1>Create new Post </h1>
      <CreatePost />
     
    </section>
  );
};

export default UserProfile;
