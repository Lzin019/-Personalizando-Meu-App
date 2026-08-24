import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShadowVisible: false,
                tabBarActiveTintColor: '#0da163',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}>
            <Tabs.Screen
                name="interface"
                options={{
                    title: 'Interface',
                    headerTitle: 'Interface',
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    headerTitle: 'Projeto Base',
                }}
            />
            <Tabs.Screen
                name="aulas"
                options={{
                    title: 'Aulas',
                    headerTitle: 'Conteúdo',
                }}
            />

            <Tabs.Screen
                name="sobre"
                options={{
                    title: 'Sobre',
                    headerTitle: 'Sobre',
                }}
            />

            <Tabs.Screen
                name="api"
                options={{
                    title: 'Api',
                    headerTitle: 'Api',
                }}
            />

             <Tabs.Screen
                name="post"
                options={{
                    title: 'Post',
                    headerTitle: 'Post',
                }}
            />
        </Tabs>
    );
}
