import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text } from '@components/common/Text'
import DefinitionBox from '@/components/screens/docs/boxes/DefinitionBox'
import {TipBox} from '@/components/screens/docs/boxes/TipBox'
import { tw } from '@/utils/styles'

const ComplexDefinition = () => {
  return (
    <ScrollView style={tw("flex-1")} showsVerticalScrollIndicator={false}>
      <View style={tw("space-y-4")}>
        {/* <DefinitionBox
          title="តើកុំផ្លិចជាអ្វី?"
          content={
            <View style={tw("space-y-2")}>
              <Text>ចំនួនកុំផ្លិច គឺជាចំនួនដែលមានរាង a + bi ដែល a និង b ជាចំនួនពិត</Text>
              <Text>ឧទាហរណ៍: 2 + 3i, -1 + 4i, 5 - 2i</Text>
            </View>
          }
        />

        <TipBox
          title="ចំណាំ!"
          content={
            <View style={tw("space-y-2")}>
              <Text>i ហៅថាតម្លៃនិមិត្ត ដែល i² = -1</Text>
              <Text>សំណុំចំនួនកុំផ្លិចតាងដោយ​​ C</Text>
              <Text>a ហៅថាផ្នែកពិត (Re(z) = a)</Text>
              <Text>b ហៅថាផ្នែកនិមិត្ត (Im(z) = b)</Text>
            </View>
          }
        />

        <DefinitionBox
          title="កុំផ្លិចឆ្លាស់"
          content={
            <View style={tw("space-y-2")}>
              <Text>កុំផ្លិចឆ្លាស់​នៃកុំផ្លិចជាចំនួនកុំផ្លិចដែលតាងដោយ z̄ = a - bi</Text>
              <Text>ឧទាហរណ៍: ចំពោះ z = 2 + 3i នោះ z̄ = 2 - 3i</Text>
            </View>
          }
        />

        <DefinitionBox
          title="កុំផ្លិចពីរស្មើគ្នា"
          content={
            <View style={tw("space-y-2")}>
              <Text>
                កាលណាកុំផ្លិចពីរស្មើគ្នាគេបានផ្នែកពិតនៃកុំផ្លិចទាំងពីរស្មើគ្នា និងផ្នែកនិមិត្តនៃកុំផ្លិចទាំងពីរស្មើគ្នា
              </Text>
              <Text>
                ឧទាហរណ៍: 2 + 3i = 2 + 3i ព្រោះផ្នែកពិត 2 = 2 និងផ្នែកនិមិត្ត 3 = 3
              </Text>
            </View>
          }
        /> */}
      </View>
    </ScrollView>
  )
}

export default ComplexDefinition