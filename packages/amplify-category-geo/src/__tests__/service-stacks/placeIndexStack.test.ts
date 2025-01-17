import { AccessType } from '../../service-utils/resourceParams';
import { PlaceIndexStack } from '../../service-stacks/placeIndexStack';
import { App } from '@aws-cdk/core';

describe('cdk stack creation for place index service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('creates place index policy for Authorized users only access type', async() => {
        const stackProps = {
            accessType: AccessType.AuthorizedUsers
        }
        const mapStack = new PlaceIndexStack(new App(), 'PlaceIndexStack', stackProps);
        expect(mapStack.toCloudFormation()).toMatchSnapshot();
    });

    it('creates place index policy for Authorized and Guest users access type', async() => {
        const stackProps = {
            accessType: AccessType.AuthorizedAndGuestUsers
        }
        const mapStack = new PlaceIndexStack(new App(), 'PlaceIndexStack', stackProps);
        expect(mapStack.toCloudFormation()).toMatchSnapshot();
    });
});