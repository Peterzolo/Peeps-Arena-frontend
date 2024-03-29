import { Avatar } from '@components/avatar/Avatar';
import { Button } from '@components/Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '@components/suggestions/Suggestions.scss';
// import { Utils } from '@services/utils/utils.service';
// import { FollowersUtils } from '@services/utils/followers-utils.service';
// import { filter } from 'lodash';
// import { addToSuggestions } from '@redux/reducers/suggestions/suggestions.reducer';

const Suggestions = () => {
  const { suggestions } = useSelector((state) => state);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  // const followUser = async (user) => {
  //   try {
  //     FollowersUtils.followUser(user, dispatch);
  //     const result = filter(users, (data) => data?._id !== user?._id);
  //     setUsers(result);
  //     dispatch(addToSuggestions({ users: result, isLoading: false }));
  //   } catch (error) {
  //     Utils.dispatchNotification(error.response.data.message, 'error', dispatch);
  //   }
  // };

  useEffect(() => {
    setUsers(suggestions?.users);
  }, [suggestions, users]);

  return (
    <div className="main-container">
      <div className="title">Suggestions</div>
      <hr />
      <div className="suggestion-box">
        {users &&
          users.map((user) => (
            <div className="suggestion-items" key={user._id}>
              <div className="left-item">
                <div className="avatar">
                  <Avatar
                    name={user?.username}
                    bgColor={user?.avatarColor}
                    textColor="#ffffff"
                    size={40}
                    avatarSrc={user?.profilePicture}
                  />
                </div>
                <div className="user-name">{user?.username}</div>
              </div>

              <div className="right-item">
                {' '}
                <Button className="button follow" label="Follow" />
              </div>
            </div>
          ))}
      </div>
      {users.length > 3 && (
        <div className="view-more" onClick={() => navigate('/app/social/people')}>
          view more suggestions{' '}
        </div>
      )}
    </div>
  );
};

export default Suggestions;

// {
/* <div className="suggestions-list-container">
<div className="suggestions-header">
  <div className="title-text">Suggestions</div>
</div>
<hr />
<div className="suggestions-container">
  <div className="suggestions">
    {users?.map((user) => (
      <div className="suggestions-item" key={user?._id}>
        <div className="avatar-wrapper">
          <Avatar
            name={user?.username}
            bgColor={user?.avatarColor}
            textColor="#ffffff"
            size={40}
            avatarSrc={user?.profilePicture}
          />
          <div className="title-text">{user?.username}</div>
        </div>
        <div className="add-icon">
          <Button
            label="Follow"
            className="button follow"
            disabled={false}
            // handleClick={() => followUser(user)}
          />
        </div>
      </div>
    ))}
  </div>
  {users.length > 8 && (
    <div className="view-more" onClick={() => navigate('/app/social/people')}>
      View More
    </div>
  )}
</div>
</div> */
// }
