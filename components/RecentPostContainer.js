import NavLink from "@components/NavLink";
import Date from "@components/Date";
import Link from "next/link";
import { Title } from "./custom-tw-components";
import {
  RPContainer,
  RPHeader,
  RPPost,
  RPPosts,
  RPTitle,
} from "./custom-tw-components";
import utilStyles from "@styles/utils.module.scss";

const RecentPostsContainer = ({ posts, title, link }) => {
  return (
    <RPContainer className={utilStyles.loadUp}>
      <RPHeader>
        <RPTitle> {title} </RPTitle>
        <NavLink
          link={link}
          customClass={`flex justify-end text-sm text-primary`}
          value={"View more..."}
        />
      </RPHeader>

      <RPPosts>
        {posts.map(({ url_path, title, date }) => (
          <RPPost key={title}>
            <Date
              dateString={date}
              customClass={"text-xs break-normal inline-block mr-3"}
            />
            <Link href={url_path.replace("-", "/")} passHref>
              <Title> {title} </Title>
            </Link>
          </RPPost>
        ))}
      </RPPosts>
    </RPContainer>
  );
};

export default RecentPostsContainer;