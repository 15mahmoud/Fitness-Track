

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  overflow-y: auto;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionTitle = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const BlogPost = styled.div`
  background-color: ${({ theme }) => theme.card_background};
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const BlogTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const BlogContent = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  text-align: justify;
`;

const Blogs = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Latest Blogs</SectionTitle>

        <BlogPost>
          <BlogTitle>The Importance of Staying Active</BlogTitle>
          <BlogContent>
            Staying physically active is essential for overall health and
            well-being. Regular exercise helps to maintain a healthy weight,
            improves cardiovascular health, and boosts mental health. Whether
            it's a daily walk or an intense workout, every movement counts.
            Staying active also promotes better sleep and helps reduce stress
            levels. Physical activity releases endorphins, the body's natural
            mood lifters, helping you stay positive and energetic throughout the
            day. Making small changes like choosing stairs over elevators can
            have a significant impact over time.
          </BlogContent>
        </BlogPost>

        <BlogPost>
          <BlogTitle>Top 10 Fitness Tips for Beginners</BlogTitle>
          <BlogContent>
            Starting a new fitness journey can be intimidating, but with the
            right approach, it can be both rewarding and enjoyable. Here are the
            top 10 fitness tips for beginners: 1. Set realistic goals. 2. Start
            with simple exercises. 3. Warm up before each session. 4. Focus on
            proper form. 5. Gradually increase intensity. 6. Stay hydrated. 7.
            Incorporate strength training. 8. Listen to your body. 9. Mix up
            your routine to avoid plateaus. 10. Stay consistent and patient. By
            following these tips, you can build a solid foundation and achieve
            your fitness goals more effectively.
          </BlogContent>
        </BlogPost>

        <BlogPost>
          <BlogTitle>How to Create a Balanced Workout Plan</BlogTitle>
          <BlogContent>
            Creating a balanced workout plan is key to ensuring you get the most
            out of your fitness routine. A well-rounded plan should include
            exercises that target strength, endurance, flexibility, and balance.
            Start by identifying your goals, such as weight loss, muscle gain,
            or improving overall fitness. For strength, incorporate resistance
            training 2-3 times a week. For endurance, aim for cardiovascular
            activities like running, swimming, or cycling 3-4 times a week.
            Don't forget to add flexibility exercises like yoga or stretching
            and balance exercises to improve core stability.
          </BlogContent>
        </BlogPost>
      </Wrapper>
    </Container>
  );
};

export default Blogs;
