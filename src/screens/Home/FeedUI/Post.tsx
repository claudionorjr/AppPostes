import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Alert } from 'react-native';
import { Typography } from '../../../elements';
import { Post as TypePost } from '../../../@types/Post';

import {
  PostContainer,
  ContentPostContainer,
  BottomContainer,
  HeaderContainer,
  IconContainer,
  ButtonIcon,
} from './styles';
import capitalizedString from '../../../helpers/capitalizedString';
import editTimeToPhrase from '../../../helpers/editTimeToPhrase';
import normalizePixel from '../../../helpers/normalizePixel';
import parseQuantityLikesAndLoves from '../../../helpers/parseQuantityLikesAndLoves';
import { useReaction } from '../../../hooks/reaction';
import { useAuth } from '../../../hooks/auth';

interface Props {
  post: TypePost;
}

const Post: React.FC<Props> = ({ post }) => {
  const [likes, setLikes] = useState<number>(post.likes);
  const [loves, setLoves] = useState<number>(post.loves);
  const [activeUserLovedIt, setActiveUserLovedIts] = useState<boolean>(
    post.activeUserLovedIt !== 0,
  );
  const [activeUserLikedIt, setActiveUserLikedIts] = useState(
    post.activeUserLikedIt !== 0,
  );
  const { reactionLikeIt, reactionLoveIt } = useReaction();
  const { token } = useAuth();

  const handleToLove = useCallback(() => {
    const newLoves = activeUserLovedIt ? loves - 1 : loves + 1;
    setLoves(newLoves);
    setActiveUserLovedIts(!activeUserLovedIt);
    reactionLoveIt(token, post)
      .then(() => {})
      .catch(err => {
        console.log('REACTIONLOVEIT:', err);
        const rollbackLoves = activeUserLovedIt ? loves + 1 : loves - 1;
        setLoves(rollbackLoves);
        setActiveUserLovedIts(!activeUserLovedIt);
        Alert.alert(
          'Ops...',
          'Tivemos um problema para reagir à esta publicação.',
        );
      });
  }, [token, reactionLikeIt, activeUserLovedIt, loves]);

  const handleToLike = useCallback(() => {
    const newLikes = activeUserLikedIt ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setActiveUserLikedIts(!activeUserLikedIt);
    reactionLikeIt(token, post)
      .then(() => {})
      .catch(err => {
        console.log('REACTIONLIKEIT:', err);
        const rollbackLikes = activeUserLikedIt ? likes + 1 : likes - 1;
        setLikes(rollbackLikes);
        setActiveUserLikedIts(!activeUserLikedIt);
        Alert.alert(
          'Ops...',
          'Tivemos um problema para reagir à esta publicação.',
        );
      });
  }, [token, reactionLikeIt, activeUserLikedIt, likes]);

  const toParseLoveAndLike = useCallback(
    (type: 'loves' | 'likes'): string => {
      const result =
        type === 'loves'
          ? parseQuantityLikesAndLoves(loves, type)
          : parseQuantityLikesAndLoves(likes, type);

      return result;
    },
    [loves, likes],
  );

  return (
    <PostContainer>
      <HeaderContainer>
        <Typography
          text={capitalizedString(post.author.username)}
          color="White"
          fontFamily="Regular"
          size={20}
        />
        <Typography
          text={editTimeToPhrase(post.createdAt)}
          color="Light"
          fontFamily="Light"
          size={13}
        />
      </HeaderContainer>
      <ContentPostContainer>
        <Typography
          text={post.content}
          color="Normal"
          fontFamily="Regular"
          size={18}
        />
      </ContentPostContainer>
      <BottomContainer>
        <IconContainer>
          <ButtonIcon onPress={handleToLove}>
            <Icon
              name="heart"
              size={normalizePixel(28)}
              color={activeUserLovedIt ? '#d9408a' : '#fff'}
            />
          </ButtonIcon>
          <ButtonIcon onPress={handleToLike}>
            <Icon
              name="thumbs-up"
              size={normalizePixel(28)}
              color={activeUserLikedIt ? '#d9408a' : '#fff'}
            />
          </ButtonIcon>
        </IconContainer>
        <Typography
          text={toParseLoveAndLike('loves')}
          color="Light"
          fontFamily="Light"
          size={15}
        />
        <Typography
          text={toParseLoveAndLike('likes')}
          color="Light"
          fontFamily="Light"
          size={15}
        />
      </BottomContainer>
    </PostContainer>
  );
};

export default Post;
