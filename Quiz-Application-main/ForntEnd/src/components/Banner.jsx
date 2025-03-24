import React from "react";
function Banner() {
    const banner = "/d44ef9c1-2df1-42da-861e-90ee4c1d7b5e.jpg";
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-10 flex flex-col md:flex-row my-3">
                <div className="w-full md:order-1 order-2 md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-12">
                        <h1 className="text-2xl md:text-4xl  md:my - 5">
                            <span className="text-green-500 md:text-7xl font-bold ">
                                {" "}
                                Let's Quiz <br />
                            </span>
                            <span>Test your skills and become a master</span>
                        </h1>
                        <p className="text-sm md:text-xl ">
                            we organize quizzes on various topic <br />
                            sing up if you haven't already and get access to
                            millions of quizzes on the topic of your interest
                        </p>
                        <h2 className="text-xl md:text-3xl font-bold">
                            Start Your journery Here:
                        </h2>
                    </div>
                    <button className="btn btn-success mt-6 md:mt-8 md:px-8">
                        Sign Up ⟶
                    </button>
                </div>
                <div className="w-full order-1  md:ml-2 md:w-1/2 mt-5 md:mt-30">
                    <img
                        src={banner}
                        className=" h-55 w-81 "
                        alt="banner image on fornt"
                    />
                </div>
            </div>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-10  my-3">
                <h1 className="text-2xl md:text-4xl  md:my - 5">
                    Quiz Instructions <br />
                    <br />
                </h1>
                <p className="text-sm md:text-xl ">
                    1. The quizzes consists of questions carefully designed to
                    help you self-assess your comprehension of the information
                    presented on the topics covered in the module. No data will
                    be collected on the website regarding your responses or how
                    many times you take the quiz.
                    <br />
                    <br />
                    2. Each question in the quiz is of multiple-choice or "true
                    or false" format. Read each question carefully, and click on
                    the button next to your response that is based on the
                    information covered on the topic in the module. Each correct
                    or incorrect response will result in appropriate feedback
                    immediately at the bottom of the screen.
                    <br />
                    <br />
                    3. After responding to a question, click on the "Next
                    Question" button at the bottom to go to the next questino.
                    After responding to the 8th question, click on "Close" on
                    the top of the window to exit the quiz.
                    <br />
                    <br />
                    4.If you select an incorrect response for a question, you
                    can try again until you get the correct response. If you
                    retake the quiz, the questions and their respective
                    responses will be randomized.
                    <br />
                    <br />
                    5.The total score for the quiz is based on your responses to
                    all questions. If you respond incorrectly to a question or
                    retake a question again and get the correct response, your
                    quiz score will reflect it appropriately. However, your quiz
                    will not be graded, if you skip a question or exit before
                    responding to all the questions.
                </p>
                <br />
                <br />
            </div>
        </>
    );
}

export default Banner;
