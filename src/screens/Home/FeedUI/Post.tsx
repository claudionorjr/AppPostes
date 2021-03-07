import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

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

interface Props {
  post: TypePost;
}

const Post: React.FC<Props> = ({ post }) => (
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
        <ButtonIcon onPress={() => console.log('heart')}>
          <Icon name="heart" size={normalizePixel(28)} color="#fff" />
        </ButtonIcon>
        <ButtonIcon onPress={() => console.log('like')}>
          <Icon name="thumbs-up" size={normalizePixel(28)} color="#fff" />
        </ButtonIcon>
      </IconContainer>
      <Typography
        text={parseQuantityLikesAndLoves(post.loves, 'loves')}
        color="Light"
        fontFamily="Light"
        size={15}
      />
      <Typography
        text={parseQuantityLikesAndLoves(post.likes, 'likes')}
        color="Light"
        fontFamily="Light"
        size={15}
      />
    </BottomContainer>
  </PostContainer>
);

export default Post;
