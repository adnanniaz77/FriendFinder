$(document).ready(() => {
    $("#submit").click(() => {
        let surveyName = $("#name").val();
        let surveyLink = $("#photo").val();
        let surveyQ1 = $("#q1").val();
        let surveyQ2 = $("#q2").val();
        let surveyQ3 = $("#q3").val();
        let surveyQ4 = $("#q4").val();
        let surveyQ5 = $("#q5").val();
        let surveyQ6 = $("#q6").val();
        let surveyQ7 = $("#q7").val();
        let surveyQ8 = $("#q8").val();
        let surveyQ9 = $("#q9").val();
        let surveyQ10 = $("#q10").val();
        // console.log(
        //     surveyName,
        //     surveyLink,
        //     surveyQ1,
        //     surveyQ2,
        //     surveyQ3,
        //     surveyQ4,
        //     surveyQ5,
        //     surveyQ6,
        //     surveyQ7,
        //     surveyQ8,
        //     surveyQ9,
        //     surveyQ10
        // );
        validateForm();
    });

    function validateForm() {
        let allFormFields = $("select");
        for (let i = 0; i < allFormFields.length; i++) {
            if (allFormFields[i].value === "") {
                alert("Please Compete the form before submitting");
                break;
            }
        }
    }
});
