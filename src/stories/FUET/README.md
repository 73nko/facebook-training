# Fraud score

Aircall is testing a new service called Fraud Unknown Entities Tracer (also known as FUET) that can help us to detect suspicious accesses to our applications.
FUET provides a list of identities, the devices by identity and the accesses by the device. Each access will have a numeric score (higher, more options to be a fraudulent attempt)

The provided input by FUET is an unordered list with all this info. The format of each entity follows the following rules:

* Identities are sent as four hex characters (ex. FA54)
* Devices are sent as the device id identity id (four hex characters) and the device id (four hex characters) separated by a dot (ex FA54.096B)
* Accesses are sent as the device id and the score (in decimal) separated by a dot (ex. 096B.18)

Now you are thinking: Why is the identity id sent separately if we can extract this info from the devices? 
Because we can receive accesses that do not belong to any identity, they have been to be discarded. Well, FUET is not perfect, we have to evaluate it.

Our target will be to obtain an indicator based on the final score of this identity (calculated as the average of the scoring average by device related to this identity).
The indicator will be 'red' if the score is greater than 70, 'yellow' if the score is greater than 25 and lower or equal than 70, and 'green' if is lower or equal to 25.
We should write the identity id, then the arrow ("-->") and finally the indicator.

**Note:** We can receive devices for some entities but because of some errors, we are not receiving the accesses, so these devices are not considered for the average.

## Example

### Example 01

#### Input

    FA54.096B
    096B.43
    FA54
    096B.18

#### Process

In this case, we have just one identity id (FA54), who has used one device (096B), doing two accesses to our applications, getting a score of 42 in one of them and 18 in another. 
So, the average is 30.5, which is associated with the indicator 'yellow'.

#### Expected output

    FA54-->yellow

### Example 02

#### Input

    A135.82
    85CD.31C5
    FA54.A134
    A134.74
    096B.33
    1234.68
    1234.73
    FA54.096B
    A134.43
    A134.54
    85CD
    31C5.58
    FA54
    096B.18
    31C5.60
    7781.53
    096B.11
    85CD.A135
    85CD.1234
    1234.70
    096B.40



#### Process

In this case we have just two identity ids (FA54 and 85CD). We can see the data in the following diagram:
    
    Identity: FA54
        |---dev: A134 --> scores: 74,43,54 --> average: 57
        |---dev: 096B --> scores: 33,18,11,40 --> average: 25.5
        |---total average: 41.25 --> 'yellow'
    Identity: 85CD
        |---dev: 31C5 --> scores: 58,60 --> average: 59
        |---dev: A135 --> scores: 82  --> average: 82
        |---dev: 1234 --> scores: 68,73,70 --> average: 70.33
        |---average: 70.44 --> 'red'
    Identity: ????
        |---dev: 7781 --> score: 53


#### Expected output

    85CD-->red
    FA54-->yellow

## Output description

The output must be written to `stdout`. It must contain one line per identified identity with the identity id followed by the arrow (-->) and then the colour indicator.
The order matters: the identity ids have to be sorted from smallest to largest (as you can see in the example above, 85CD first than FA54)

## Submission

Please send your source code to <isidro.garcia@aircall.io> for verification once you are confident it solves the problem as requested. The email timestamp will be used to determine the scores.
