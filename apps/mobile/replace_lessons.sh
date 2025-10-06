#!/bin/bash

# Root directory to start replacing
ROOT_DIR="lessons/components"

# Placeholder content
PLACEHOLDER="import { View } from 'react-native'
import { Text } from '@components/common/Text'

export default function PlaceHolder() {
    return (
        <View>
            <Text>PlaceHolder</Text>
        </View>
    )
}
"

# Loop through all .tsx files
find \"$ROOT_DIR\"  | while read -r file; do
    echo \"Replacing content in \$file\"
    echo \"$PLACEHOLDER\" > \"\$file\"
done

echo \"✅ All .tsx files replaced with placeholder.\"
