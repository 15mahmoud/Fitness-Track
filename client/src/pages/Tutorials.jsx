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
  gap: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const TutorialStep = styled.div`
  background-color: ${({ theme }) => theme.card_background};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Tutorial = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>How to Use Fitness Tracker</SectionTitle>

        <TutorialStep>
          <StepTitle>1. Adding Your First Workout</StepTitle>
          <StepDescription>
            Navigate to the "Add Workout" section. Enter your workout details
            like category, sets, reps, and weight. Click "Save" to track your
            workout.
          </StepDescription>
        </TutorialStep>

        <TutorialStep>
          <StepTitle>2. Viewing Your Workout History</StepTitle>
          <StepDescription>
            Go to the "History" tab to see a detailed list of all your previous
            workouts. Filter by date or category to review specific workouts.
          </StepDescription>
        </TutorialStep>

        <TutorialStep>
          <StepTitle>3. Tracking Calories Burned</StepTitle>
          <StepDescription>
            Each workout automatically calculates calories burned based on your
            inputs. You can view your total calories burned for the week in the
            "Stats" section.
          </StepDescription>
        </TutorialStep>

        <TutorialStep>
          <StepTitle>4. Creating Workout Plans</StepTitle>
          <StepDescription>
            You can create custom workout plans for your week or month. Navigate
            to the "Plans" section, add exercises, and save the plan for future
            workouts.
          </StepDescription>
        </TutorialStep>
      </Wrapper>
    </Container>
  );
};

export default Tutorial;
